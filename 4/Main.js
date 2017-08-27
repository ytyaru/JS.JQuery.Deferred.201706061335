$(function(){
    // キッチンタイマーを作成する
    function KitchenTimer(sec) {
        this.timer = sec;
        this.intervalId = null;
        this.deferred = $.Deferred();

        // 100ms毎にカウントダウンする
        this.countdown = function() {
            this.timer -= 100;
            this.deferred.notify();   // 100ms毎に progress() のコールバックを呼び出す
            if (this.timer <= 0) {
                clearInterval(this.intervalId);
                this.deferred.resolve();  // 完了したら解決(resolved)状態にする
            }
        };

        // カウントダウンを開始する
        this.start = function() {
            this.intervalId = setInterval(this.countdown.bind(this), 100);
        };

        this.deferred.promise(this);
        return this;
    }

    var timer = new KitchenTimer(3000);
    timer.done(function() { $("#log").append("Done!\n"); });
    timer.progress(function() { $("#log").append("."); });
    timer.start();
});

