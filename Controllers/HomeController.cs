using GPQassim.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace GPQassim.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult begin()
        {
            return View();
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Thanx()
        {
            return View();
        }



        [HttpPost]
        public IActionResult Index(Student? st)
        {
            int id = st.StId;
            var std = Student.GetStudent(id);
            if (std != null)
            {
                return Redirect($"https://localhost/Home/questions?id={id}");
            }
            else
            {
                return View();
            }
        }
        [HttpGet]
        public IActionResult questions(int? id)
        {

            var std = Student.GetStudent(id);
            if (std != null)
            {

                ViewBag.StName = std.StName;
                ViewBag.StGrade = std.Grade;
                ViewBag.stSpec = std.Department;
                var que = Question.GetQuestion(std.count + 1);
                if (que != null)
                {
                    if (que.QId <= 50)
                    {
                        ViewBag.QId = que.QId;
                        ViewBag.Qtext = que.QuestionText;
                        ViewBag.A = que.A;
                        ViewBag.B = que.B;
                        ViewBag.C = que.C;
                        ViewBag.D = que.D;
                        ViewBag.Qasim = id;
                        return View();
                    }
                    return RedirectToAction("Index");
                }
                else
                {
                    if (std.count == 50)
                    {
                        return RedirectToAction("Thanx");
                    }
                    return RedirectToAction("Index");
                }


            }
            else
            {
                return RedirectToAction("Index");
            }
        }
        [HttpPost]
        public IActionResult questions(Questionnaire? status)
        {
            GpContext Gp = new GpContext();
            if (status.AStatus == 1)
            {
                status.BStatus = 0;
                status.CStatus = 0;
                status.DStatus = 0;
            }
            if (status.AStatus == 2)
            {
                status.AStatus = 0;
                status.BStatus = 1;
                status.CStatus = 0;
                status.DStatus = 0;
            }
            if (status.AStatus == 3)
            {
                status.AStatus = 0;
                status.BStatus = 0;
                status.CStatus = 1;
                status.DStatus = 0;
            }
            if (status.AStatus == 4)
            {
                status.AStatus = 0;
                status.BStatus = 0;
                status.CStatus = 0;
                status.DStatus = 1;
            }
            if (status.AStatus == null)
            {
                return Redirect($"https://localhost/Home/questions?id={status.StId}");

            }
            var st = Student.GetStudent(status.StId);
            int newcount = st.count.Value + 1;
            (from p in Gp.Students
             where p.StId == status.StId
             select p).ToList().ForEach(x => x.count = newcount);
            Gp.Questionnaires.Add(status);
            Gp.SaveChanges();
            return Redirect($"https://localhost/Home/questions?id={status.StId}");
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}