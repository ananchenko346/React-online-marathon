import DataService from '../services/DataService/index';
import mockAxios from '../__mocks__/axios';

it('calls axios', async () => {

  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      results: ['Fact MOCHA']
    }
  }));

  const res = await DataService('any data');

  expect(res).toEqual({'data':{'results': ['Fact MOCHA']}});
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

