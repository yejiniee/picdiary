export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div> {children} </div>;
}

/* 
페이지마다 다른 레이아웃 설정 가능

 html, body 태그는 필수로 지워줄 것
 app 안의 layout은 어떤 페이지든 전체 적용
 해당 폴더 안의 layout은 그 폴더에만 적용되는 레이아웃

 '/signin' 페이지로 가는 경우

<RootLayout>
  <SignInLayout />
    <SignIn />           <- {children}
  </SignInLayout>   
</RootLayout>

실제로는 이렇게 렌더링이 됨
*/
