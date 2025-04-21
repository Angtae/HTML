def function_a1():
    print('module a: function_a1 호출됨')
    function_a2()

def function_a2():
    print('module a: function_a2 호출됨')
    function_a3()

def function_a3():
    print('module a: function_a3 호출됨')
    function_hello()

def function_hello():
    print('module a: function_hello 호출됨')
    function_goodbye()

def function_goodbye():
    print('module a: function_goodbye 호출됨')
    function_a2()

def function_b1(value):
    print('module b: function_b1 호출됨')
    function_b2(value)

def function_b2(value):
    print('module b: function_b2 호출됨')
    function_b3(value)

def function_b3(value):
    print('module b: function_b3 호출됨')
    function_hello(value)

    if __name__ == '__main__':
        print('module a의 메인함수')