# Etapa base común para pnpm
FROM node:20-alpine AS pnpm-base
RUN npm install -g pnpm

# Dependencias de desarrollo
FROM pnpm-base AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN pnpm i --frozen-lockfile

# Dependencias de producción
FROM pnpm-base AS production-dependencies-env
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN pnpm i --frozen-lockfile --prod

# Build
FROM pnpm-base AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN pnpm run build

# Imagen final
FROM pnpm-base
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["npm", "run", "start"]