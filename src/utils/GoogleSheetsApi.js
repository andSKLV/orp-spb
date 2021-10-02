class GoogleSheetsApi {

  getTableData(path) {
    return this._fetcher(path);
  }

  _fetcher(path) {
    return fetch(`${path}`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    });
  }
}

const googleSheetsApi = new GoogleSheetsApi();

export default googleSheetsApi;