cls
@echo off
color 0a
TITLE MongoDB Manager

goto menu
:menu
cls
echo.
echo.=-=-=-=-��ѡ���MongoDB�Ĳ���-=-=-=-=-
echo.
echo.1: ����MongoDB
echo.
echo.2: �ر�MongoDB
echo.
echo.3: ����MongoDB
echo.
echo.4: �˳�
echo.
echo.=-=-=-=-����������-=-=-=-
set /p id=
if "%id%"=="1" goto startup
if "%id%"=="2" goto shutdown
if "%id%"=="3" goto reboot
if "%id%"=="4" exit
pause

:startup
echo.
call :checkMongoDB 1
echo.����MongoDB......
net start "MongoDB"
echo.����MongoDB�ɹ�!
pause
goto menu

:shutdown
echo.
call :checkMongoDB 2
echo.�ر�MongoDB......
net stop "MongoDB"
echo.�ر�MongoDB�ɹ�!
pause
goto menu

:reboot
echo.
call :checkMongoDB 2
echo.�ر�MongoDB......
net stop "MongoDB"
echo.�ر�MongoDB�ɹ�!
goto startup
goto menu

:goout
pause
goto menu

:checkMongoDB
set /a count=0
for /f "tokens=1 delims= " %%i in ('tasklist /nh ^| find /i "mongod"') do (set /a count+=1)
if %count% neq 0 if "%1" equ "1" (
  echo MongoDB������
  goto goout
)
if %count% equ 0 if "%1" equ "2" (
  echo MongoDBδ����
  goto goout
)