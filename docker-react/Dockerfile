FROM node:latest

WORKDIR /app

RUN npm create vite@latest form-sample -- --template react-ts

WORKDIR /app/form-sample

# vite.config.jsファイルを編集してホスト設定を追加
RUN sed -i "s/export default defineConfig({/export default defineConfig({\n  server: { host: '0.0.0.0' },/" vite.config.ts

RUN npm install

CMD [ "npm", "run","dev" ]


