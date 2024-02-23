# Use uma imagem base do Node.js
FROM node:latest

# Cria o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o resto dos arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o servidor Node.js está sendo executado
EXPOSE 3000

