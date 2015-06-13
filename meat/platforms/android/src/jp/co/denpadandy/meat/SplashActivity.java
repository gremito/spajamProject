package jp.co.denpadandy.meat;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.KeyEvent;
import android.view.Window;
import android.view.animation.AlphaAnimation;
import android.widget.ImageView;

/**
 * Created by (c)2015 NTT EAST, INC. All Rights Reserved.
 *
 * スプラッシュクラス.
 * <pre>
 * 概要：アプリ起動時にスプラッシュ画面を出力.
 * </pre>
 * @version 1.0
 * @since 2014/10/23/v1.0
 */
public class SplashActivity extends Activity {

    /** スプラッシュ画面の出力時間 */
    private final int TIMER     =   3000;

    /**
     * Activityが生成された直後に一度のみ処理される
     * @param savedInstanceState Activity情報
     *
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        // setContentViewの前でタイトル非表示
        super.onCreate(savedInstanceState);
        // スプラッシュ画面なため、タイトルバーを無くす設定
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        // 画面内のlayout設定
        setContentView(R.layout.splash);

        // ハンドラー生成
        Handler hdl = new Handler();
        // 3秒後に遷移するように設定
        hdl.postDelayed(new splashHandler(), TIMER-100);

//        // imageViewをimvとして宣言
//        ImageView imv = (ImageView)findViewById(R.id.splash_image);
//        //フェードアウトアニメーション"fadeout"を宣言
//        AlphaAnimation fadeout = new AlphaAnimation( 1, 0 );
//        //フェードアウトするまでの時間。単位はmsec。
//        fadeout.setDuration( TIMER );
//        //imvにフェードアウトアニメーションを適用する
//        imv.startAnimation( fadeout );

    }


    /**
     * ボタンイベントハンドリング
     * @param keyCode   ボタン種類
     * @param event     ボタン機能
     * @return
     */
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        //------------------------------------------------------------------------------
        // ボタンがBackキーか確認する
        //------------------------------------------------------------------------------
        if (keyCode != KeyEvent.KEYCODE_BACK) {
            return super.onKeyDown(keyCode, event);
        }
        //------------------------------------------------------------------------------
        // 戻るボタンの処理させない
        //------------------------------------------------------------------------------
        return false;
    }


    /**
     * クラスの説明：スプラッシュハンドラークラス。<br>
     * 3秒後にローディング画面へ遷移する。
     *
     */
    class splashHandler implements Runnable {
        /**
         * ループメソッド
         *
         */
        public void run() {
            // インテント生成：現スプラッシュ画面から次ローディング画面へ遷移するように設定
            Intent i = new Intent(getApplication(),MainActivity.class);
//            Intent i = new Intent(getApplication(),TesterActivity.class);
            // インテント読み込み..
            startActivity(i);
            // スプラッシュ画面をメモリから削除する
            SplashActivity.this.finish();
        }
    }
}