import java.security.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

public static class SNet {
    private int[] MembersID;

    // initialized
    public SNet(int N) {

        MembersID = new int[N];
        for (int i = 0; i < N; i++) {
            MembersID[i] = i;
        }
    }

    private int root(int i) {
        while (i != MembersID[i])
            i = MembersID[i];
        return i;
    }

    public boolean connected(int f1, int f2) {
        return root(f1) == root(f2);
    }

    public void union(int f1, int f2) {
        int i = root(f1);
        int j = root(f2);
        if (i == j)
            return;
        if (sz[i] < sz[j]) {
            id[i] = j;
            sz[j] += sz[i];
        } else {
            id[j] = i;
            sz[i] += sz[j];
        }

    }

}