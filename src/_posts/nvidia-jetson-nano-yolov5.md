---
title: '在 NVIDIA Jetson Nano 上跑 Yolov5 上踩的雷!!!'
excerpt: '圖像辨識的 Model 很多，研究了一下，Yolo演算法把圖片分割的方式非常特別，所以很像試試看。但在 Jetson Nano 上跑起 Yolov5 可是整整花了我兩個晚上啊 !!! 這篇文章來說說我踩過的雷。'
coverImage: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1683708139372/6910adc4-ca5f-4efc-8f27-bd58894a7e17.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
date: '2023-05-10'
author:
  name: PoYu Chen
  picture: '/avatar.png'
ogImage: 
  url: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1683708139372/6910adc4-ca5f-4efc-8f27-bd58894a7e17.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
---

從 N 年前開始學網球的時候，就覺得應該要有一類似掃地機器人的工具，幫忙撿球。最近比較有時候，就想來試試。

其實圖像辨識的 Model 很多，研究了一下，Yolo演算法把圖片分割的方式非常特別，所以很像試試看。但在 Jetson Nano 上跑起 Yolov5 可是整整花了我兩個晚上啊 !!! 這篇文章來說說我踩過的雷。

以下五大點是踩雷結論:

1. 用官方的 docker 跑起來 [nvcr.io/nvidia/l4t-ml:r32.5.0-py3](http://nvcr.io/nvidia/l4t-ml:r32.5.0-py3)
    
2. git clone [https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5) 但要切到對應上面 docker 環境的commit <mark>91547edec1a33121b3607e8c946e051514182b4f</mark>
    
3. Yolov5 裡的 requirements.txt 有三個套件要 mark 掉，因為 docker 已經幫你建好符合 Jetson Nano 的 <mark>opencv-python, torch, torchvision</mark>
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683709623889/91e0e963-81ee-46b6-985e-c2f8f2fbd534.png align="center")

1. 第一個錯誤<mark>"can't get attribute 'sppf' "</mark>是 Yolov5 已經進化到多了 SPPF 這個function，我們用的 commit 當初沒有，所以我們要手動把這個function 加上。
    
    這個問題我修改了兩個檔案  
    1\. utils/google\_utils.py  
    2\. models/common.py
    

```plaintext
# yolov5/utils/google_utils.py
- response = requests.get(f'https://api.github.com/repos/{repo}/releases/latest').json() 

+ response = requests.get(f'https://api.github.com/repos/{repo}/releases/tag/v5.0').json() 

# yolov5/models/common.py 
# copy SPPF fubctuon for following link.
# https://github.com/ultralytics/yolov5/blob/v6.0/models/common.py
class SPPF(nn.Module):
    # Spatial Pyramid Pooling - Fast (SPPF) layer for YOLOv5 by Glenn Jocher
    def __init__(self, c1, c2, k=5):  # equivalent to SPP(k=(5, 9, 13))
        super().__init__()
        c_ = c1 // 2  # hidden channels
        self.cv1 = Conv(c1, c_, 1, 1)
        self.cv2 = Conv(c_ * 4, c2, 1, 1)
        self.m = nn.MaxPool2d(kernel_size=k, stride=1, padding=k // 2)

    def forward(self, x):
        x = self.cv1(x)
        with warnings.catch_warnings():
            warnings.simplefilter('ignore')  # suppress torch 1.9.0 max_pool2d() warning
            y1 = self.m(x)
            y2 = self.m(y1)
            return self.cv2(torch.cat([x, y1, y2, self.m(y2)], 1))
```

1. 第二個錯誤是，"the size of tensor a(80) must match the size of tensor b (56) at non-singleton dimension 3"，原因是 Yolov5 幫我們預下載的 "[yolov5s.pt](http://yolov5s.pt)" model 是最新的，不是這個 tag v5.0 支援的 model。所以我們要先把自動下載的 "[yolov5s.pt](http://yolov5s.pt)" 刪掉後，再手動下載
    
    ```plaintext
    wget https://github.com/ultralytics/yolov5/releases/download/v5.0/yolov5s.pt
    ```
    
    經過以上的踩雷後，Jetson nano 真的可以跑 Yolov5 了!!!! 附上原圖(紅色馬賽客是後來補上的，跑 YoloV5 的時候並沒有馬賽客)，跟跑出來的結果，成果相當的好啊!! 至少第一個球場上的網球都有被標到，看來我的撿球機器人已經邁向了 3%了!!
    

![測試圖片](https://cdn.hashnode.com/res/hashnode/image/upload/v1683710132655/62c5c439-ffd6-42f0-b782-28584cb546dd.jpeg)

![跑完後的圖片](https://cdn.hashnode.com/res/hashnode/image/upload/v1683710156035/e30fd96d-52bf-4e15-97c0-557732f732f0.jpeg)