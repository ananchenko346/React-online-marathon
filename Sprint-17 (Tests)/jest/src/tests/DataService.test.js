import DataService from '../services/DataService/index';
import mockAxios from '../__mocks__/axios';

it('calls axios', async () => {

  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      results: ['Fact MOCHA']
    }
  }))

  const images = await DataService('any data');

  expect(images).toEqual({ 'data': { 'results': ['Fact MOCHA'] } });
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

