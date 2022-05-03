#include <iostream>
using namespace std;

class Circle {
private:
	int radius;
public:
	void serradius(int radius);
	double getarea();
};
void Circle::serradius(int radius) {
	this->radius = radius;
}
double Circle::getarea() {
	return 3.14 * radius * radius;
}
int main() {
	int count = 0, n, m;
	cin >> n;
	Circle* p = new Circle[n];
	for (int i = 0; i < n; i++) {
		cin >> m;
		p[i].serradius(m);
	}
	for (int i = 0; i < n; i++)
	{
		if (p[i].getarea() > 100) count++;
	}
	cout << count;
}