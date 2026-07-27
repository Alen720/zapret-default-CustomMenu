#include <windows.h>
#include <tlhelp32.h>
#include <iostream>
#include <string>

bool CheckProcessName(const std::wstring& processName) {
    bool exists = false;

    HANDLE hSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    if (hSnapshot == INVALID_HANDLE_VALUE) return false;

    PROCESSENTRY32W pe;
    pe.dwSize = sizeof(PROCESSENTRY32W);

    if (Process32FirstW(hSnapshot, &pe)) {
        do {
            if (lstrcmpiW(pe.szExeFile, processName.c_str()) == 0) {
                exists = true;
                break;
            }
        } while (Process32NextW(hSnapshot, &pe)); 

        CloseHandle(hSnapshot); 
        return exists;
    }
}

bool KillProcessName(const std::wstring& processName) {
    bool targetFound = false;

    // Создаем снимок всех запущенных процессов
    HANDLE hSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    if (hSnapshot == INVALID_HANDLE_VALUE) return false;

    PROCESSENTRY32W pe;
    pe.dwSize = sizeof(PROCESSENTRY32W);

    // Проходим по списку процессов
    if (Process32FirstW(hSnapshot, &pe)) {
        do {
            // Если имя совпало (lstrcmpiW сравнивает без учета регистра)
            if (lstrcmpiW(pe.szExeFile, processName.c_str()) == 0) {
                targetFound = true;
                
                // Пытаемся закрыть процесс по найденному PID
                HANDLE hProcess = OpenProcess(PROCESS_TERMINATE, FALSE, pe.th32ProcessID);
                if (hProcess != NULL) {
                    TerminateProcess(hProcess, 0);
                    CloseHandle(hProcess);
                    std::cout << "Процесс " << pe.th32ProcessID << " успешно завершен." << std::endl;
                }
            }
        } while (Process32NextW(hSnapshot, &pe));
    }

    CloseHandle(hSnapshot);
    return targetFound;
}