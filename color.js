// Body라고 하는 변수에 함수 사용, 객체 담기 (배열 생각할 때 key : value 하면 쉬움)
var Body = {
    setColor : function(color) {
        $('body').css('color',color);
    },
    setBackgroundColor : function(color) {
        $('body').css('backgroundColor',color);
    }
}

// Link라고 하는 변수에 함수 사용, 객체 담기
var Link = {
    setColor: function(color) {
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }

    // 최종적으로 jQuery 라이브러리 사용
        $('a').css('color',color);
    }
}

// nightDayHandler() 함수에서 Body, Link 변수 대한 위의 함수(객체) 써서 중복 처리
// Toggle 버튼 만드는 함수 완성 시킴.
function nightDayHandler(self) {
    if(self.value === 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');

        Link.setColor('powderblue');

        self.value = 'day'
    }
    else {
        Body.setColor('black');
        Body.setBackgroundColor('white');

        Link.setColor('blue');

        self.value = 'night'
    }
}