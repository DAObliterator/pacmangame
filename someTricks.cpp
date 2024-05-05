#include <iostream>
#include <vector>
#define PB push_back
#define REP( i , a , b) for ( int i = a ; i <= b ; i++)
#define REP_1(i, a, b) for (int i = a ; i < b; i++)
using namespace std;



int main() {



    int s;
    vector <int> someIntegers;

    cin>>s;

    for ( int i = 0 ; i < s; i++) {
        int m;
        cin>>m;
        someIntegers.PB(m);
    }

    REP_1( i , 0 , s) {
        cout<<someIntegers[i];
    }
}