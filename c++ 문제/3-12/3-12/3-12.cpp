#include <iostream>
#include <cstring>
using namespace std;

class book {
	char* title;
	int price;
public:
	book(string str, int price) {
		this->price = price;
		int len = str.length();
		title = new char[len];
		for (int i = 0; i < len; i++) {
			title[i] = str[i];
		}
	}
	book(book& b) {
		price = b.price;
		int len = strlen(b.title);
		title = new char[len+1];
 		strcpy_s(title, b.title);
	}
	void set(string str, int price) {
		this->price = price;
		int len = str.length();
		title = new char[len];
		for (int i = 0; i < len; i++) {
			title[i] = str[i];
		}
	}
	void show() { cout << title << ' ' << price << "원" << endl; }
};

int main() {
	book cpp("명품c++", 10000);
	book java = cpp;
	java.set("명품자바", 12000);
	cpp.show();
	java.show();
};