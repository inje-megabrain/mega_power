#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

class Random {
private :
	int num;
public:
	int next();
	int nextinrange(int x,int y);
};

int Random::next() {
	while (true) {
		num = rand();
		if (num % 2 == 0) return num;
	}
}
int Random::nextinrange(int x, int y) {
	while (true) {
		num = rand() % 9 + 2;;
		if (num % 2 != 0) return num;
	}
}
int main() {
	Random r;
	cout << "-- 0 에서" << RAND_MAX << "까지의 랜덤 정수 10 개 --" << endl;
	for (int i = 0; i < 10; i++) {
		int n = r.next();
		cout << n << ' ';
	}
	cout << endl << endl << "-- 2에서 4ㅏ 까지의 랜덤 정수 10 개 -- " << endl;
	for (int i = 0; i < 10; i++) {
		int n = r.nextinrange(2, 4);
		cout << n << ' ';
	}
	cout << endl;
}