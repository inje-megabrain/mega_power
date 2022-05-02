#include <iostream>
using namespace std;

class Oval {
private:
	int width, height;
public:
	Oval();
	Oval(int w, int h);
	~Oval();
	int getwidth();
	int getheight();
	void set(int w, int h);
	void show();
};
Oval::Oval() {
	width = 1;
	height = 1;
}
Oval::Oval(int w, int h) {
	width = w;
	height = h;
}
int Oval::getwidth() {
	return width;
}
int Oval::getheight() {
	return height;
}
void Oval::set(int w, int h) {
	width = w;
	height = h;
}
void Oval::show() {
	cout << width << " , " << height << endl;
}

Oval::~Oval() {
	cout << "Oval ¼Ò¸ê :" << width << height << endl;
}

int main() {
	Oval a, b(3, 4);
	a.set(10, 20);
	a.show();
	cout << b.getwidth() << "," << b.getheight() << endl;
}