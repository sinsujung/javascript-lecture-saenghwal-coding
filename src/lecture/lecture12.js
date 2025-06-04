    /*
        function 함수명( [인자...[, 인자]]) {
            코드
            return 반환값
        }
        - 재사용성
        - 유지보수 용이
        - 가독성 증가
    */

    // function numbering() {
    //     document.write(1);
    // }
    // numbering();
    // numbering();
    // numbering();
    // numbering();
    // numbering();
    // numbering();
    // numbering();
    // numbering();
    // numbering();

    // function numbering() {
    //     i = 0;
    //     while(i < 20) {
    //         document.write(i+"<br />");
    //         i += 1;
    //     }
    // }

    // for (let i = 0; i < 10; i++) {
    //     numbering();
    // }

    // 출력 return
    function get_member1() {
        return 'egoing';
    }

    function get_member2() {
        return 'k8895';
    }

    document.write(get_member1());
    document.write("<br/>"+get_member2());


    // 입력
    function get_argument(arg) {
        return arg;
    }

    // alert(get_argument(1));
    // alert(get_argument(2));

    function get_argument(arg1, arg2) {
        return arg2 + arg1;
    }

    document.write("<br/>" + get_argument(1,2) + "<br/>");

    const numbering = function () {
        let i = 0;
        while(i < 10) {
            document.write(i);
            i += 1;
        }
    }
    numbering();

    // 익명함수
    (function () {
        i = 0;
        while (i < 10) {
            document.write(i);
            i += 1;
        }
    })();
