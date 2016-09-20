// inner block scopes
#include <iostream>
using namespace std;

int main () {
  int x = 10;
  int y = 20;
  {
    int x;   // ok, inner scope.
    x = 50;  // sets value to inner x
    y = 50;  // sets value to (outer) y
    cout << "inner block:\n";
    cout << "x: " << x << '\n';
    cout << "y: " << y << '\n';
  }
  cout << "outer block:\n";
  cout << "x: " << x << '\n';
  cout << "y: " << y << '\n';
  return 0;
}



#include <random>
#include <vector>
int main()
{
	std::vector<int> v = {10, 15, 20, 25, 30};
	std::random_device random_device;
	std::mt19937 engine{random_device()};
	std::uniform_int_distribution<int> dist(0, v.size() - 1);

	int random_element = v[dist(engine)];
}



#include <vector>
class foo
{
	public:
		class builder;
		foo(int prop1, bool prop2, bool prop3, std::vector<int> prop4)
			: prop1{prop1}, prop2{prop2}, prop3{prop3}, prop4{prop4}
		{ }
		int prop1;
		bool prop2;
		bool prop3;
		std::vector<int> prop4;
};
class foo::builder
{
	public:
		builder& set_prop1(int value) { prop1 = value; return *this; };
		builder& set_prop2(bool value) { prop2 = value; return *this; };
		builder& set_prop3(bool value) { prop3 = value; return *this; };
		builder& set_prop4(std::vector<int> value) { prop4 = value; return *this; };
		foo build() const
		{
			return foo{prop1, prop2, prop3, prop4};
		}
	private:
		int prop1 = 0;
		bool prop2 = false;
		bool prop3 = false;
		std::vector<int> prop4 = {};
};
int main()
{
	foo f = foo::builder{}.set_prop1(5)
	                      .set_prop3(true)
	                      .build();
}
