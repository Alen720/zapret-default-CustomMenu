#include <iostream>
#include <string>
#include <filesystem>
#include <format>
#include <print>
#include <vector>
#include <cstdlib>
#include <windows.h>
#include <conio.h>

/* 

    :: 
    :: ПРИ КОМПИЛЯЦИИ ИСПОЛЬЗОВАТЬ ФЛАГ -std=c++26
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
            sizeBatZapret++;
            if (dir_entry.is_regular_file() && dir_entry.path().extension() == ".bat") {
                std::cout << sizeBatZapret << "-->  " << dir_entry.path().filename() << std::endl;
                bat_files_vector.push_back(dir_entry.path().string());
            }
        }
    } catch (const fsCore::filesystem_error& e) {
        std::cerr << "Error! " << e.what() << "\n";
    }
    
    std::println("\n\nSelect zapret-bat: ");

    

    for (int i = 0; i < sizeBatZapret; i++) {
        char selectBat = _getch();
        int selectInt = selectBat - '0';
        if (selectInt > selectInt ) {
            std::println("Error! Not found bat");
            menu();
        }
        else if (selectBat == 'q' || selectBat == 'Q') {
            return;
        }
        else {

            std::system(bat_files_vector[selectInt]);
        }
    }
    
}

int main(int argc, char* argv[]) {
    
    int result_mb = MessageBoxW(NULL, L"Это тестовая версия", L"Предупреждение", MB_YESNO | MB_ICONWARNING);

    if (result_mb == IDYES) {
        menu();
    }
    else {
        return 1;
    }

    return 0;
}
