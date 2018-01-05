using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AgendaService.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AgendaService.Controllers
{
    [Authorize]
    //[Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    public class AgendaController : Controller
    {
        // GET api/values
        // [HttpGet]
        // public IEnumerable<string> Get()
        // {
        //     return new string[] { "value1", "value2" };
        // }

        public static List<TodoItem> Todos = TodoItem.CreateList();

        [HttpGetAttribute("api/agenda")]
        public List<TodoItem> GetTodos()
        {
            return Todos;
        }

        [HttpGet("api/agenda/{title}")]
        public TodoItem GetTodo(string title)
        {
            var todo = Todos.FirstOrDefault(td => td.Title == title);
            return todo;
        }

        [HttpDelete("api/agenda/{title}")]
        public bool DeleteTodo(string title)
        {
            var match = Todos.FirstOrDefault(td => td.Title == title);
            if (match != null)
                Todos.Remove(match);

            return true;
        }


        [HttpPut("api/agenda")]
        [HttpPost("api/agenda")]
        public bool UpdateTodo([FromBody] TodoItem todo)
        {
            var existingTodo = Todos.FirstOrDefault(td => td.Title == todo.Title);
            if (existingTodo != null)
            {
                int idx = Todos.IndexOf(existingTodo);
                Todos[idx] = todo;
            }
            else
                Todos.Insert(0, todo);

            return true;
        }

        [HttpGet("agenda/status")]
        public object Status()
        {
            return new
            {
                OS = System.Runtime.InteropServices.RuntimeInformation.OSDescription,
                MachineName = System.Environment.MachineName
            };
        }
    }
}
