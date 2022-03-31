#include <iostream>
#include <algorithm>
#include <cmath>

//BOJ 2108 '통계학' (solved.ac Silver 3)
//Solved by Wonseok Choi (devmiru)

using namespace std;

int num[8001]; //최빈값 인덱싱을 위한 빈 배열 선언 (-4000 ~ 4000)

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int n, tmp, mx = 0, mx_n = 0;
	cin >> n;
	int* arr = new int[n]; //수 처리 및 정렬 위한 동적배열 선언
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
		tmp = arr[i];
		num[tmp + 4000]++; //인덱싱한 수에 해당하면 ++
	}
	sort(arr, arr+n); //algorithm - sort
	//-- 만약 n이 1일 경우에는 예외처리 --
	if (n == 1) {
		for (int i = 0; i < 3; i++) {
			cout << arr[0] << '\n';
		}
		cout << '0';
	}
	//-- 예외처리 끝, 프로그램 종료 --
	else {
		//1. 산술평균 구하고 출력 (double sum)
		double sum = 0; //특) 반올림 해야하므로 double로 선언
		for (int i = 0; i < n; i++) {
			sum += arr[i];
		}
		sum = round(sum / n); //소숫점 첫째자리 반올림 (cmath - round)
		if (sum == -0) { //-0 나올거 대비해서 선처리 (-1 / 3 하면 -0 나오더라)
			sum = 0;
		}
		cout << sum << '\n';
		//2. 중앙값 구하고 출력 (arr[n/2])
		cout << arr[n/2] << '\n';
		//3. 최빈값 구하고 출력 (여기서 서렌칠뻔함)
		for (int i = -4000; i < 4001; i++) {
			//-4000부터 4000까지 돌면서 인덱싱된 최빈값 구하기
			if (num[i + 4000] >= mx) {
				mx = num[i + 4000]; //mx = 최빈값
				mx_n = i; //mx_n = 최빈값인 수
			}
		}
		//최빈값이 2개 이상인지 체크
		int chk_cnt = 0, tmp_n = 0;
		for (int i = -4000; i < 4001; i++) {
			if (num[i + 4000] == mx) {
				chk_cnt++; //최빈값 카운트
			}
		}
		if (chk_cnt > 1) { //2개 이상이면?
			int* nxt_arr = new int[chk_cnt]; //최빈값 갯수만큼 동적배열 생성
			for (int i = -4000; i < 4001; i++) {
				if (num[i + 4000] == mx) {
					nxt_arr[tmp_n] = i; //반복문 돌면서 최빈값 같은 수들 채우기
					tmp_n++; //nxt_arr[값++]
				}
			}
			cout << nxt_arr[1] << '\n'; //최빈값 중 2번째로 작은 수 출력
		}
		else {
			cout << mx_n << '\n'; //2개 이상이 아니라면, 최빈값 출력
		}
		//4. arr의 최댓값과 최솟값의 범위 출력
		cout << arr[n-1] - arr[0];
	}
	return 0; //fin.
}
