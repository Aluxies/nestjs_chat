### Generate a module

```
nest g module <module_name>
```

### Generate a controller without test file

```
nest g controller <controller_name> --no-spec
```

### Generate a service without test file

```
nest g service <service_name> --no-spec
```

### Install prisma database dependency

```
npm i prisma --save-dev
```

### Init prisma database

```
npx prisma init
```

### Create a deployed MySQL database

[https://planetscale.com/](https://neon.tech/)

### Push prisma db schema to database

```
npx prisma db push
```

### Execute queries directly in prisma studio

```
npx prisma studio
```