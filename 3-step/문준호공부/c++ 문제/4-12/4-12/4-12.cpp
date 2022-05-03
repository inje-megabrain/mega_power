#include <iostream>
using namespace std;

class circle {
private:
	int radius;
	string name;
public:
	void setcircle(string name, int radius);
	double getarea();
	string getname();
};

void circle::setcircle(string name, int radius) {
	this->name = name;
	this->radius = radius;
}
double circle::getarea() {
	return radius * radius * 3.14;
}
string circle::getname() {
	return name;
}

class circlemanager {
private:
	circle* p;
	int size;
public:
	circlemanager(int size);
	~circlemanager();
	void searchbyname(string name);
	void searchbyarea(int size);
};
circlemanager::circlemanager(int size) {
	this->size = size;
	p = new circle[size];
	for (int i = 0; i < size; i++) {
		string name;
		int rad;
		cout << "원의 이름과 반지름";
		cin >> name >> rad;
		p[i].setcircle(name, rad);
	}
}
void circlemanager::searchbyname(string name) {
	for (int i = 0; i < size; i++) {
		if (p[i].getname() == name) {
			cout << "도넛의 면적은 " << p[i].getarea() << endl;
			break;
		}
	}
}
void circlemanager::searchbyarea(int size) {
	for (int i = 0; i < this->size; i++) {
		if (p[i].getarea() > size) {
			cout << p[i].getname() << "의 면적은 " << p[i].getarea() << ", ";
		}
	}
}
circlemanager::~circlemanager() {

}
int main() {
	int n,size;
	string sea;
	cin >> n;
	circlemanager c(n);
	cout << "검색하고자 하는 원의 이름";
	cin >> sea;
	c.searchbyname(sea);
	cout << "최손 면적을 정수로 입력";
	cin >> size;
	c.searchbyarea(size);
	

}