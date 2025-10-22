#指定使用 Node.js 18.17.0 版本
FROM node:18.17.0

#設定工作目錄為 /app，表示之後的命令將在這個目錄下執行
WORKDIR /app

#安裝相依套件
COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean

#將本地目錄下的所有檔案複製到容器的 /app 目錄中
COPY . .

#在容器中執行 yarn build 命令
RUN yarn build

#使用 3000 port
EXPOSE 3000

#設定容器啟動時執行的預設命令為 yarn start
CMD [ "yarn", "start" ]