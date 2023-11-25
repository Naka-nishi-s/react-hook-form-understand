import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import './App.css';

function NewForm() {

  const scheme = object({
    email:
      string()
        .required('必須です。')
        .matches(/^[A-Za-z]+$/, '文字列のみを入力してください。')
        .min(3, '3文字以上ネ')
  })

  const { register, handleSubmit, watch, formState: { errors, isValid, isDirty } }: any = useForm({ mode: 'onChange', criteriaMode: 'all', resolver: yupResolver(scheme) });

  const nice = (e: any) => {
    console.log(e)
  }

  const watchAge = watch('age', false)

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(nice)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id='email'
            {...register('email')} type='email' />
          {/* 一カ所で出し分けるパターン */}
          {errors.email?.message && <div>{errors.email.message}</div>}

          {/* 複数表示パターン */}
          {/* このときは、useFormのcriticalModeをデフォルトのfirstErrorからallへ変更 */}
          {/* {errors.email?.types.required && <div>入力必須</div>}
          {errors.email?.types.minLength && <div>8文字以上で入力してください。</div>}
          {errors.email?.types.pattern && <div>アルファベットで入力してください。</div>} */}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id='password' {...register('password')} type='password' />
        </div>
        <div>
          <label htmlFor="age">その他の設定</label>
          <input id='age' {...register('age')} type='checkbox' />
        </div>
        {watchAge && (
          <p>Nice Check!</p>
        )}
        <div>
          <button type="submit" disabled={!isDirty || !isValid}>ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
