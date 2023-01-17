using ClalitTest.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ClalitTest.Controllers
{
    [AllowAnonymous]
    public class CurrencyController : Controller
    {
        public readonly ICurrencyService _currencyService;
        public CurrencyController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCurrencies()
        {
            return Ok(await _currencyService.GetAllCurrencies());
        }
    }
}
