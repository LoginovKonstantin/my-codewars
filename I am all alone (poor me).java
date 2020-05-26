import java.awt.Point;
import java.util.ArrayList;
import java.util.List;

public class Dinglemouse {
    public static boolean allAlone(char[][] house) {
        List<Point> points = new ArrayList<>();
        for (int x = 0; x < house.length; x++) {
            for (int y = 0; y < house[x].length; y++) {
                if (house[x][y] == 'X') {
                    points.add(new Point(x, y));
                }
            }
        }

        while (true) {
            boolean blockAllPoints = true;
            for (int k = 0; k < points.size(); k++) {
                Point p = points.get(k);
                Point up = new Point(p.x - 1, p.y);
                Point down = new Point(p.x + 1, p.y);
                Point right = new Point(p.x, p.y + 1);
                Point left = new Point(p.x - 1, p.y - 1);
                if (isFinish(house, up, down, right, left)) {
                    return false;
                }
                if (success(house, points, up, down, right, left)) {
                    blockAllPoints = false;
                }
            }
            if (blockAllPoints) {
                return true;
            }
        }
    }

    private static boolean success(char[][] house, List<Point> points, Point up, Point down, Point right, Point left) {
        return addPoint(house, points, up) ||
                addPoint(house, points, down) ||
                addPoint(house, points, right) ||
                addPoint(house, points, left);
    }

    private static boolean isFinish(char[][] house, Point up, Point down, Point right, Point left) {
        return house[up.x][up.y] == 'o' ||
                house[down.x][down.y] == 'o' ||
                house[right.x][right.y] == 'o' ||
                house[left.x][left.y] == 'o';
    }

    private static boolean addPoint(char[][] house, List<Point> points, Point point) {
        if (!points.contains(point) && house[point.x][point.y] != '#') {
            points.add(point);
            return true;
        }
        return false;
    }
}
