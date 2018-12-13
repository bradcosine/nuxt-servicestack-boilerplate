using ServiceStack;

namespace ChangeThisNamespace
{
    public interface ICommonResponse
    {
        bool Ok { get; set; }
        ResponseStatus ResponseStatus { get; set; }
    }
}
