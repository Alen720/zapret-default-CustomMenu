@echo off
cls
echo Compile zapret

clang.exe src/*.cpp -std=c++23 -o src/main.exe