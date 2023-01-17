using ClalitTest.Interfaces;
using System.Text.Json;
using System.Xml;
using System.Xml.Linq;
using System.Linq;
using System.Reflection.Metadata;
using System.Net;
using Newtonsoft.Json;

namespace ClalitTest.Services
{
    public class CurrencyService : ICurrencyService
    {
        private readonly IConfiguration _configuration;

        public CurrencyService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<string> GetAllCurrencies()
        {
            try
            {
                string jsonText = string.Empty;
                string url = _configuration["dataUrl"];
                var doc = XDocument.Load(url);
                if (doc != null)
                {
                    jsonText = JsonConvert.SerializeObject(doc);
                }
                return jsonText;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw ex;
            }

        }
    }
}
