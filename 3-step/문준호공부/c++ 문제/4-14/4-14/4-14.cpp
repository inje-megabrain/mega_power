#include <iostream>
#include <string>
using namespace std;

class gamble {
private:
	int num;
public:
	int ran();
	int getnum();
};
int gamble::ran() {
	num = rand() % 3;
	return num;
}
int gamble::getnum() {
	return num;
}
class player {
private:
	string name;
public:
	void setname(string name);
	string getname();
};
void player::setname(string name) {
	this->name = name;
}
string player::getname() {
	return name;
}
int main() {
	player* p = new player[2];
	string name;
	bool vic = true;
	gamble* g = new gamble[3];
	for (int i = 0; i < 2; i++) {
		getline(cin, name);
		p[i].setname(name);
	}
	while (vic) {
		string n;
		for (int i = 0; i < 2; i++) {
			cout << p[i].getname();
			getline(cin, n);
			for (int j = 0; j < 3; j++) {
				cout << g[j].ran() << "    ";
			}
			if (g[0].getnum() == g[1].getnum() && g[0].getnum() == g[2].getnum()) {
				cout << p[i].getname() << "´Ô ½Â¸®!!";
				vic = false;
				break;
			}
			else cout << "¾Æ½±±º¿ä!" << endl;
		}
	}
}