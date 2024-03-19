#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main() {
    std::string input;
    std::cout << "Enter a number: ";
    std::getline(std::cin, input); // Get the entire line to include potential floating points

    std::istringstream stream(input);
    double number;
    char check;

    // Attempt to read a number
    if (stream >> number) {
        // Check if there's anything left in the stream after reading the number
        if (stream >> check) {
            // If we can read a non-numeric character after the number, it's an invalid input
            std::cout << "-1 (Invalid input, not a pure number)" << std::endl;
        } else {
            // At this point, we've read a number successfully and nothing else was in the input
            if (number == static_cast<int>(number)) {
                // The number is an integer if it's equal to its integer cast
                std::cout << "Input is an integer." << std::endl;
            } else {
                // Otherwise, it's a float
                std::cout << "Input is a float." << std::endl;
            }
        }
    } else {
        // Couldn't read the input as a number at all
        std::cout << "-1 (Invalid input, not recognizable as a number)" << std::endl;
    }

    return 0;
}
