#include <iostream>
#include <string>
using namespace std;

class Person {
public:
	string name;
	Person() {};
	Person(string name) { this->name = name; }
	string getname() { return name; }
	void setname(string name) { this->name = name; }
};

class Family {
private:
	Person *p;
	int size;
	string name;
public:

	Family(string name, int size);
	void show();
	~Family() {};
	void setname(int x, string name);
};
Family::Family(string name, int size) {
	this->size = size;
	this->name = name;
	p = new Person[size];
}
void Family::setname(int x,string name) {
	p[x].setname(name);
}
void Family::show() {
	cout << name << "의 가족구성원은 " << size << endl;
	for (int i = 0; i < size; i++) cout << p[i].getname() << "   ";
}
int main() {
	Family* simpson = new Family("Simpson", 3);
	simpson->setname(0, "Mr. simpson");
	simpson->setname(1, "Mrs. simpson");
	simpson->setname(2, "Bart simpson");
	simpson->show();
	delete simpson;
}