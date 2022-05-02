#include <iostream>
using namespace std;
class his {
private:
	string str;
public:
	his(string str);
	void put(string s);
	void putc(char c);
	void print();
};
his::his(string str) {
	this->str = str;
};
void his::put(string s) {
	str += s;
}
void his::putc(char c) {
	str += c;
}
void his::print() {
	int num[27] = {0};
	char c;
	cout << str;
	for (int i = 0; i < str.length(); i++) {
		if (str[i] > 96 && str[i] < 123) num[str[i]-96]++;
		else if (str[i] > 64 && str[i] < 91) num[str[i] - 64]++;
	}
	for (int i = 0; i <= 26; i++) {
		c = i+96;
		cout << c << " ( " << num[i] << " )     : ";
		for (int j = 0; j < num[i]; j++) cout << "*";
		cout << endl;
	}
}

int main() {
	his elv("Wise men say, only fools rush in But I can't help, ");
	elv.put("falling in love with you");
	elv.putc('-');
	elv.put("Elvis Presley");
	elv.print();
}