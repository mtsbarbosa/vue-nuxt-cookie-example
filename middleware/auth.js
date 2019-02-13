
export default function (context) {
  const cookies = process.server ? context.app.$cookies : this.$cookies;
  const session = cookies.get('JSESSIONID');
  if (!session) {
    context.redirect('/login');
  }else if(context.route.path === '/' || context.route.path === '/login'){
    context.redirect('/management/language/list');
  }
}
