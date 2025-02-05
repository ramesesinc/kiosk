@echo off

npm install
npm run build
RD /S /Q "src"
RD /S /Q "next-env.d.ts"
RD /S /Q ".eslintrc.json"
RD /S /Q ".hintrc"
RD /S /Q "postcss.config.js"
RD /S /Q "tailwind.config.ts"
RD /S /Q "tsconfig.json"
RD /S /Q "install.bat"
exit