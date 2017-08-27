$(function(){
    var func = function() {
        var dfd = $.Deferred();
        setTimeout(() => { 
            console.log('setTimeout():Deferred!!');
            dfd.resolve('Deferred!!'); // 成功時は resolve)
            dfd.reject(); // 失敗時は reject()
            // 一度 resolve か reject を行ったら状態変化しない
        }, 3000);
        return dfd.promise();
    };
    func()
        .done(function(data) {
            // resolveが実行された場合
            // data: resolve()に渡したオブジェクト
            console.log('done start------------');
            console.log(data);
            console.log('done end------------');
            alert(data)
        })
        .fail(function () {
            // rejectが実行された場合
            console.log('fail------------');
            alert('fail');
        });
});

