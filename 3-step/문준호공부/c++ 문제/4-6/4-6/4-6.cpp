#include <iostream>
#include <string>
using namespace std;

int main() {
	string str;
	while (1) {
		getline(cin, str);
		if (str == "exit") break;
		for (int i = str.length(); i >= 0; i--) {
			cout << str[i];
		}
		cout << endl;
	}
}