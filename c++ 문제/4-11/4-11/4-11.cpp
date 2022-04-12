#include <iostream>
using namespace std;

class container {
private:
	int size;
public:
	container() { size = 10; }
	void fill();
	void consume();
	int getsize();
};
void container::fill() {
	size = 10;
}
void container::consume() {
	if (size != 0) size--;
	else cout << "원료가 부족합니다.";
}
int container::getsize() {
	return size;
}

class coffee {
private:
	container tong[3];
	void fill();
	void selectesp();
	void selectame();
	void selectsug();
	void show();
public:
	void run();
};
void coffee::run() {
	int n;
	cin >> n;
	if (n == 1) {
		selectesp();
	}
	if (n == 2) {
		selectame();
	}
	if (n == 3) {
		selectsug();
	}
	if (n == 4) {
		show();
	}
	if (n == 5) {
		fill();
	}
}
void coffee::fill() {
	tong[0].fill();
	tong[1].fill();
	tong[2].fill();
}
void coffee::selectesp() {
	tong[0].consume();
	tong[1].consume();
	cout << "에스프레소"<<endl;
}
void coffee::selectame() {
	tong[0].consume();
	tong[1].consume();
	tong[1].consume();
	cout << "아메리카노" << endl;
}
void coffee::selectsug() {
	tong[0].consume();
	tong[1].consume();
	tong[1].consume();
	tong[2].consume();
	cout << "설탕" << endl;
}
void coffee::show() {
	cout << "커피 : " << tong[0].getsize() << "물 : " << tong[1].getsize() << "설탕 : " << tong[2].getsize() << endl;
}

int main() {
	coffee c;
	while (1) {
		c.run();
	}
}