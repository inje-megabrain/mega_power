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
	else cout << "���ᰡ �����մϴ�.";
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
	cout << "����������"<<endl;
}
void coffee::selectame() {
	tong[0].consume();
	tong[1].consume();
	tong[1].consume();
	cout << "�Ƹ޸�ī��" << endl;
}
void coffee::selectsug() {
	tong[0].consume();
	tong[1].consume();
	tong[1].consume();
	tong[2].consume();
	cout << "����" << endl;
}
void coffee::show() {
	cout << "Ŀ�� : " << tong[0].getsize() << "�� : " << tong[1].getsize() << "���� : " << tong[2].getsize() << endl;
}

int main() {
	coffee c;
	while (1) {
		c.run();
	}
}