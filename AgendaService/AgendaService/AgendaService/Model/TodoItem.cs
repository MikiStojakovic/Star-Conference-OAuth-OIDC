using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaService.Model
{
    public class TodoItem
    {
        public string Title { get; set; }
        public string Speaker { get; set; }
        public bool Completed { get; set; }
        public DateTime Entered { get; set; }

        public static List<TodoItem> CreateList()
        {
            return new List<TodoItem> {
                    new TodoItem {
                    Title = "Angular 2",
                    Speaker = "Ivana Tesanovic",
                    Completed = true,
                    Entered = DateTime.UtcNow.AddHours(-2),
                    },
                    new TodoItem {
                        Title = "HTTP Caching",
                        Speaker = "Dejan Ostojic",
                        Completed = true,
                        Entered = DateTime.UtcNow.AddHours(-1)
                    },
                    new TodoItem {
                        Title = "Authentification & Authorization",
                        Speaker = "Miroslav Stojakovic",
                        Entered = DateTime.UtcNow
                    },
                    new TodoItem {
                        Title = "Get Real (Time) With Websockets",
                        Speaker = "Milos Davidovic",
                        Entered = DateTime.UtcNow.AddHours(0.5)
                    },
                    new TodoItem {
                        Title = "Umbraco: Tips & Tricks",
                        Speaker = "Nenad Maljugic",
                        Entered = DateTime.UtcNow.AddHours(1.5)
                    },
                    new TodoItem {
                        Title = "MVC 5 Custom Model Binding",
                        Speaker = "Miroljub Enjakovic",
                        Entered = DateTime.UtcNow.AddHours(2)
                    },
                    new TodoItem {
                        Title = "Visitor Pattern Explained",
                        Speaker = "Milan Kosanovic",
                        Entered = DateTime.UtcNow.AddHours(3)
                    },
                    new TodoItem {
                        Title = "BDD & TDD kroz primere u C#",
                        Speaker = "Ognjen Stanic",
                        Entered = DateTime.UtcNow.AddHours(3.5)
                    }
                };
        }
    }
}
