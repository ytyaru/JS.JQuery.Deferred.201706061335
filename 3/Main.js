$(function(){
    var dfd1 = function() {
        var dfd = $.Deferred();
        setTimeout(() => { 
            console.log('setTimeout():dfd1!!');
            dfd.resolve('dfd1!!'); // 成功時は resolve()
            dfd.reject(); // 失敗時は reject()
            // 一度 resolve か reject を行ったら状態変化しない
        }, 2000);
        return dfd.promise();
    };
    var dfd2 = function() {
        var dfd = $.Deferred();
        setTimeout(() => { 
            console.log('setTimeout():dfd2!!');
            dfd.resolve('dfd2!!');
            dfd.reject();
        }, 2000);
        return dfd.promise();
    };
    var dfd3 = function() {
        var dfd = $.Deferred();
        setTimeout(() => { console.log('setTimeout():dfd3!!'); dfd.resolve('dfd3!!'); }, 2000);
        return dfd.promise();
    };
    
    $.when(dfd1(), dfd2(), dfd3())
        .done(function(data) {
            // resolveが実行された場合  data: resolve()に渡したオブジェクト
            console.log('done start------------');
            console.log(data);
            console.log('done end------------');
            alert(data)
        })
        .fail(function () {
            // rejectが実行された場合
            console.log('fail------------');
            alert('fail');
        })
        .always(function(){
            console.log('always ------------');
        });
});

