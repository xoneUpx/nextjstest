import axios from 'axios';
test('test', ()=> {
  expect(1+2).toBe(3)
})
test('async test', async () =>{
  const data = await axios.get('http://test-backend:9900/test')  
  expect(data.data).toBe('it cool')
})
