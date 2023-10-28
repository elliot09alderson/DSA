 int arr[] = {1, 4, 9, 12, 18, 30}; // 4
    int n = sizeof(arr) / sizeof(arr[0]);

    int start = 1;
    int count = 1;

    int k = 3; // number of cows to tie
    int ans = 1;
    int end = arr[n - 1] - arr[0];
    int mid;
    while (start <= end)
    {
        int pos = 0;
        int count = 1;
        mid = (start + end) / 2; // maximum distance btwn cows expected to be

        for (int i = 0; i < n; i++)
        {
            if (arr[i] >= mid + arr[pos]) //  we will check each stall which distance is greater than or equal to the pervios stall.
            {
                pos = i; // if we find the stall we will tie cow.
                cout << "posititon " << pos << endl;
                count++; // number of tied cows.
            }
        }

        if (count >= k)
        {
            ans = mid;       // maximum distance in which all cow are tied
            start = mid + 1; // kyuki we want [mid] se bada number => humko answer mil chuka hai => gaiya ko ek dusre se longest distance chahiye.
        }
        else
        {
            end = mid - 1; // mid kuch jada hi bada ho gya hai , there is no place for other cows.
        }
    }
    cout << ans;
