#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <algorithm>
using namespace std;

int main()
{

    int n, m;
    int t = 10000;

    int element;
    vector<int> smartness;
    vector<int> topics; // just an array of 1 to m
    cin >> n;           // number of students
    cin >> m;           // number of topics

    for (int j = 0; j < n; j++)
    {
        cin >> element;
        smartness.push_back(element);
    }

    for (int k = 1; k <= m; k++)
    {
        topics.push_back(k);
    }

    // find if there is anyone in school proficient in topic t
    map<int, vector<int>> proficientStudents;
    for (int a = 0; a < topics.size(); a++)
    {
        vector<int> smartStudentsIndices;
        for (int b = 0; b < smartness.size(); b++)
        {

            bool smart = smartness[b] % topics[a] == 0;

            if (smart)
            {
                smartStudentsIndices.push_back(b);
                proficientStudents[topics[a]] = smartStudentsIndices;
            }
        }
    }

    // function to find a team/s iterate through the map and find if all
    // differnce between highest smartness and lowest smartness must be lowest
    //  if there is a person in the array that is already smart in some topic do not add him unless theres no one who is smart in only that topic
    // so for m topics if there is less than n students in team then that means that there are students in the team who are proficient in more than one topic
    vector<int> team;
    // map <int , vector <int> > proficientTopics;
    for (auto i = proficientStudents.begin(); i != proficientStudents.end(); i++)
    {

        int topic = i->first;
        vector<int> smartStudentIndices = i->second;

        for (int j = 0; j < smartStudentIndices.size(); j++)
        {
            
            auto it = find(team.begin(), team.end(), smartStudentIndices[j]);

            if (it != team.end())
            {
                break;
            }
            else
            {
                auto it = find(smartness.begin(), smartness.end(), smartStudentIndices[j]);
                if (it != smartness.end())
                {
                    team.push_back(*it);
                }
            }
        }
    }

    sort( team.begin() , team.end());

    cout<< smartness[team[0]] - smartness[team[team.size() - 1]];
}