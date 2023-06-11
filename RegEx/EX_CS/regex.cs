using System.Text.RegularExpressions;

namespace  ConsoleApplication 
{
   class  Program
   {
      static void Main(string[] args) 
      {
         string alvo = "11a22b33c";
         string pattern = "@(\d\d)(\w)";

         Regex regex = new Regex(pattern);

         Match match = regex.Match(alvo);

         Console.WriteLine(match.Value);
         Console.WriteLine(match.Index);
         Console.WriteLine(match.Length);

         Console.WriteLine(match.Groups[0].Value);
         Console.WriteLine(match.Groups[1].Value);
         Console.WriteLine(match.Groups[2].Value);


         MatchCollection matches = regex.Matches(alvo);
         foreach(Match in matches) {
            Console.WriteLine(match.Groups[0].Value);
            Console.WriteLine(match.Groups[1].Value);
            Console.WriteLine(match.Groups[2].Value);
            Console.WriteLine(match.Index);
            Console.WriteLine(match.Length);
         }

      }
   }
}