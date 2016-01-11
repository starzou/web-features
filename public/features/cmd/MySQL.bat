cls
@echo off
color 0a
TITLE MySQL Manager

goto menu
:menu
cls
echo.
echo.=-=-=-=-请选择对MySQL的操作-=-=-=-=-
echo.
echo.1: 启动MySQL
echo.
echo.2: 关闭MySQL
echo.
echo.3: 重启MySQL
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
call :checkMySQL 1
echo.启动MySQL......
net start "MySQL"
echo.启动MySQL成功!
pause
goto menu

:shutdown
echo.
call :checkMySQL 2
echo.关闭MySQL......
net stop "MySQL"
echo.关闭MySQL成功!
pause
goto menu

:reboot
echo.
call :checkMySQL 2
echo.关闭MySQL......
net stop "MySQL"
echo.关闭MySQL成功!
goto startup
goto menu

:goout
pause
goto menu

:checkMySQL
set /a count=0
for /f "tokens=1 delims= " %%i in ('tasklist /nh ^| find /i "MySQL"') do (set /a count+=1)
if %count% neq 0 if "%1" equ "1" (
  echo MySQL已启动
  goto goout
)
if %count% equ 0 if "%1" equ "2" (
  echo MySQL未启动
  goto goout
)