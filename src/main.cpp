#include <iostream>
#include <string>
#include <filesystem>
#include <format>
#include <print>
#include <vector>
#include <cstdlib>
#include <windows.h>
// #include <conio.h>
#include "WindowsProcess.h"
/* 

    :: 
    :: ПРИ КОМПИЛЯЦИИ ИСПОЛЬЗОВАТЬ ФЛАГ -std=c++23
    ::
*/

// Подключение MessageBox:W/L прямо в коде для компиляции
#pragma comment(lib, "user32.lib")


int sizeBatZapret = 1;
std::vector<std::string> bat_files_vector;

// Основной путь для работы с запретом
namespace fsCore = std::filesystem;
static const std::string path = "zapret_discord_youtube";

void menu() {
    std::system("cls");
    std::println("Welcome to menu ZAPRET-DISCORD-CONSOLE");

    try {
        for (const auto& dir_entry : std::filesystem::directory_iterator{path}) {
            if (dir_entry.is_regular_file() && dir_entry.path().extension() == ".bat") {
                sizeBatZapret++;
                std::cout << sizeBatZapret << "-->  " << dir_entry.path().filename() << std::endl;
                bat_files_vector.push_back(dir_entry.path().string());
            }
        }
        
    } catch (const fsCore::filesystem_error& e) {
        std::cerr << "Error! " << e.what() << "\n";
    }
    std::println("Q | q --> exit and return 0");
    std::println("H | h --> help");
    std::println("\n\nSelect zapret-bat: ");
    

    

    for (int i = 1; i < sizeBatZapret; i++) {
        std::string selectBat;
        std::cin >> selectBat;
        int selectInt = std::stoi(selectBat); 

        if (selectInt > sizeBatZapret) {
            std::println("Error! Not found bat");
            menu();
        }
        else if (selectBat == "q" || selectBat == "Q") {
            return;
        }
        else {
            if (CheckProcessName(L"winws.exe")) {
                int result_mb = MessageBoxW(NULL, L"zapret-discord-youtube уже запущен! Хотите закрыть его?", L"Предупреждение", MB_YESNO | MB_ICONWARNING);
                if (result_mb == IDYES) {
                    KillProcessName(L"winws.exe");
                    std::system((bat_files_vector[selectInt].c_str()));
                }
            }
            else {
                std::system((bat_files_vector[selectInt].c_str()));
            }
        }
    }
    
}

int main(int argc, char* argv[]) {
    std::cout << "Program name : " << argv[0] << std::endl;
    std::cout << "Prt num : " << argc - 1 << std::endl;


    int result_mb = MessageBoxW(NULL, L"Это тестовая версия, хотите продолжить?", L"Предупреждение", MB_YESNO | MB_ICONWARNING);

    if (result_mb == IDYES) {
        menu();
    }
    else {
        return 1;
    }

    return 0;
}
