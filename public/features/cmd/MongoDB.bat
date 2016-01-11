cls
@echo off
color 0a
TITLE MongoDB Manager

goto menu
:menu
cls
echo.
echo.=-=-=-=-请选择对MongoDB的操作-=-=-=-=-
echo.
echo.1: 启动MongoDB
echo.
echo.2: 关闭MongoDB
echo.
echo.3: 重启MongoDB
echo.
echo.4: 退出
echo.
echo.=-=-=-=-输入操作序号-=-=-=-
set /p id=
if "%id%"=="1" goto startup
if "%id%"=="2" goto shutdown
if "%id%"=="3" goto reboot
if "%id%"=="4" exit
pause

:startup
echo.
call :checkMongoDB 1
echo.启动MongoDB......
net start "MongoDB"
echo.启动MongoDB成功!
pause
goto menu

:shutdown
echo.
call :checkMongoDB 2
echo.关闭MongoDB......
net stop "MongoDB"
echo.关闭MongoDB成功!
pause
goto menu

:reboot
echo.
call :checkMongoDB 2
echo.关闭MongoDB......
net stop "MongoDB"
echo.关闭MongoDB成功!
goto startup
goto menu

:goout
pause
goto menu

:checkMongoDB
set /a count=0
for /f "tokens=1 delims= " %%i in ('tasklist /nh ^| find /i "mongod"') do (set /a count+=1)
if %count% neq 0 if "%1" equ "1" (
  echo MongoDB已启动
  goto goout
)
if %count% equ 0 if "%1" equ "2" (
  echo MongoDB未启动
  goto goout
)